import { useStackApp } from "@stackframe/stack";
import { ShieldAlert } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { handleVerificationError, VerificationError } from "../AuthControler";
const VerifyForm: React.FC = () => {
  const Router = useRouter();
  const [code, setcode] = useState("");
  const [error, setError] = useState<string[]>([]);
  const app = useStackApp();
  const nonce = useSearchParams().get("nonce");
  const urlCode = useSearchParams().get("code");

  const verifyCode = async () => {
    if (urlCode) {
      try {
        const result = await app.signInWithMagicLink(urlCode);
        console.log(result);

        if (result.status === "error") {
          setError([
            handleVerificationError(
              result.error as unknown as VerificationError
            ),
          ]);
        }
      } catch (error) {
        console.log(error);
        setError([handleVerificationError(error as VerificationError)]);
      }
    }
  };

  useEffect(() => {
    if (nonce === null && urlCode === null) {
      setError(["Invalid Authorization code"]);
      return;
    }
    verifyCode();
  }, [Router, nonce]);

  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const code = formData.get("password") as string;
    setcode(code);
    try {
      const MagicCode = code + nonce;
      console.log(MagicCode);
      const result = await app.signInWithMagicLink(MagicCode);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledWrapper>
      <form className='form' onSubmit={handlesubmit}>
        <div className='title cursor-pointer'>
          <Link href={"/"}>Socium.dev</Link>
          <p className='subtitle'>Verify your email address to continue</p>
        </div>

        <input
          type='password'
          placeholder='enter the code or press the link'
          name='password'
          className='input'
        />
        {error.length > 0 && (
          <div
            className='flex items-center justify-center gap-1 ml-3 max-w-xs'
            style={{ maxWidth: 220 }}
          >
            <ShieldAlert color='white' size={20} />
            <div className='marquee-wrapper'>
              <span className='marquee'>{error[0]}</span>
            </div>
          </div>
        )}

        <button type='submit' className='button-confirm'>
          Verify Now →
        </button>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form {
    --input-focus: #2d8cf0;
    --font-color: #eee;
    --font-color-sub: #ccc;
    --bg-color: rgba(20, 20, 20, 0.9);
    --main-color: #ccc;
    padding: 20px;
    background: rgba(20, 20, 20, 0.9);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
  }

  .title {
    color: var(--font-color);
    font-weight: 900;
    font-size: 20px;
    margin-bottom: 25px;
    text-shadow: 1px 1px 2px #000;
  }

  .subtitle {
    color: var(--font-color-sub);
    font-weight: 600;
    font-size: 17px;
    text-shadow: 1px 1px 2px #000;
  }

  .input {
    width: 250px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid #ffffff80;
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 15px;
    font-weight: 600;
    color: var(--font-color);
    padding: 5px 10px;
    outline: none;
  }

  .input::placeholder {
    color: var(--font-color-sub);
    opacity: 0.8;
  }

  .input:focus {
    border: 2px solid var(--input-focus);
  }

  .login-with {
    display: flex;
    gap: 20px;
  }

  .button-log {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    color: var(--font-color);
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon {
    width: 24px;
    height: 24px;
    fill: var(--main-color);
  }

  .button-log:active,
  .button-confirm:active {
    box-shadow: 0px 0px var(--main-color);
    transform: translate(3px, 3px);
  }

  .button-confirm {
    margin: 30px auto 0 auto;
    width: 120px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 17px;
    font-weight: 600;
    color: var(--font-color);
    cursor: pointer;
  }

  .marquee-wrapper {
    max-width: 180px;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    height: 22px;
    display: flex;
    align-items: center;
  }

  .marquee {
    display: inline-block;
    color: #fff;
    font-size: 0.95rem;
    font-family: monospace;
    white-space: nowrap;
    padding-left: 100%;
    animation: marquee 9s linear infinite;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

export default VerifyForm;
