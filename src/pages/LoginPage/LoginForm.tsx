import React, { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Button } from "../../shared/ui/Button";
import { InputBox } from "../../shared/ui/InputBox";
import googleIcon from "../../assets/images/GoogleLogo.jpg";
import kakaoIcon from "../../assets/images/KakaoTalkLogo.jpg";
import { toast } from "react-toastify";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      username: !username,
      password: !password,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) {
      toast.error("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    // API 연결 전에는 그냥 콘솔 출력 정도
    console.log({ username, password, remember });
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="w-full max-w-lg text-white"
    >
      <h2 className="text-3xl font-semibold mb-1 text-center">
        Kick off your prediction journey!
      </h2>
      <p className="text-md text-gray-400 mb-6 text-center">
        Welcome back, please enter your detail
      </p>

      {/* Username Input */}
      <div className="mb-4">
        <InputBox
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          icon={<FaUserAlt />}
          hasError={errors.username}
        />
      </div>

      {/* Password Input */}
      <div className="mb-4">
        <InputBox
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<FaLock />}
          hasError={errors.password}
        />
      </div>

      {/* Remember & Forgot password */}
      <div className="flex justify-between text-sm text-gray-400 mb-6">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={remember}
            onChange={() => setRemember(!remember)}
            className="accent-[#AB54DB]"
          />
          Remember Me
        </label>
        <button type="button" className="hover:underline cursor-pointer">
          Forgot password
        </button>
      </div>

      {/* Login Button */}
      <Button type="submit" className="w-full mb-6" color="purple" size="md">
        Login
      </Button>

      {/* Or login with */}
      <div className="text-center text-gray-400 mb-4">Or login with</div>

      {/* Social login buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button className="flex items-center gap-2 border border-gray-600 px-3 py-1 rounded-md hover:bg-gray-700 transition cursor-pointer">
          <img src={googleIcon} alt="Google" className="w-5 h-5" />
          Google
        </button>
        <button className="flex items-center gap-2 border border-gray-600 px-3 py-1 rounded-md hover:bg-gray-700 transition cursor-pointer">
          <img src={kakaoIcon} alt="Kakao" className="w-5 h-5" />
          Kakao
        </button>
      </div>

      {/* Sign up link */}
      <p className="text-center text-gray-500 text-sm">
        Don&apos;t have an account?{" "}
        <a href="/signup" className="text-[#AB54DB] hover:underline">
          Sign up
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
