import type { ReactNode, InputHTMLAttributes } from "react";
import clsx from "clsx";

/** 스타일 클래스 정의 */

// 전체 인풋 래퍼 (아이콘과 인풋 감싸는 영역)
const inputWrapperStyles = "relative flex items-center rounded-md bg-[#2A2A3F]"; // 어두운 배경 + 둥근 모서리

// 인풋 기본 스타일
const baseInputStyles =
  "w-full bg-transparent text-gray-300 placeholder:text-gray-500 border border-[#444658] appearance-none outline-none rounded-md transition-colors duration-200 px-4 py-2 pl-10";
// - 투명 배경
// - 회색 텍스트 + 연한 회색 placeholder
// - 연한 테두리
// - 왼쪽 아이콘 공간 확보 (pl-10)

// 포커스 시 보라색 테두리
const focusStyles = "focus:border-[#AB54DB]";

// 비활성화 시 회색 처리 및 커서 막기
const disabledStyles =
  "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed";

// 아이콘 스타일 (왼쪽 기본 위치)
const iconStyles = "absolute left-3 text-gray-500 pointer-events-none";

/** 컴포넌트 Props 타입 정의 */
interface InputBoxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** 아이콘 컴포넌트 (예: <FaUserAlt />) */
  icon?: ReactNode;
  /** 아이콘 위치 - 기본은 왼쪽 */
  iconPosition?: "left" | "right";
  /** 커스텀 클래스 */
  className?: string;
  hasError?: boolean;
}

/** InputBox 컴포넌트 정의 */
export function InputBox({
  type = "text", // 기본 타입은 text
  disabled = false,
  icon,
  iconPosition = "left",
  className,
  hasError = false,
  ...props
}: InputBoxProps) {
  /** 아이콘 위치에 따라 인풋 패딩 조절 */
  const paddingClass = icon
    ? iconPosition === "left"
      ? "pl-10"
      : "pr-10"
    : "";

  /** 아이콘 렌더 함수 (왼쪽 또는 오른쪽) */
  const renderIcon = () =>
    icon ? (
      <span
        className={clsx(
          iconStyles,
          iconPosition === "left" ? "left-3" : "right-3"
        )}
      >
        {icon}
      </span>
    ) : null;

  // 에러일 때 적용할 스타일 (예: 빨간 테두리)
  const errorStyles = hasError ? "border-red-500" : "";

  /** 컴포넌트 반환 */
  return (
    <div className={inputWrapperStyles}>
      {/* 왼쪽 아이콘 렌더링 */}
      {iconPosition === "left" && renderIcon()}

      {/* 입력 필드 */}
      <input
        type={type}
        disabled={disabled}
        className={clsx(
          baseInputStyles,
          paddingClass,
          disabled && disabledStyles,
          !disabled && focusStyles,
          errorStyles,
          className
        )}
        {...props}
      />

      {/* 오른쪽 아이콘 렌더링 */}
      {iconPosition === "right" && renderIcon()}
    </div>
  );
}

// 사용 예시
// <InputBox
//   type="text"
//   placeholder="Username"
//   value={username}
//   onChange={(e) => setUsername(e.target.value)}
//   icon={<FaUserAlt />}
// />
