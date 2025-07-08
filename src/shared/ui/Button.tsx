import type { ReactNode, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

/**
 * 공통 버튼 스타일: flex 정렬, 폰트, 둥근 모서리, 컬러 전환 애니메이션 등 기본 스타일
 */
const baseStyles =
  "flex items-center justify-center font-medium rounded-md transition-colors duration-200 whitespace-nowrap select-none";

/**
 * 버튼 크기별 스타일 모음
 * 필요한 경우 sizeStyles에 더 추가 가능
 */
const sizeStyles = {
  md: "px-4 py-2 text-base", // 중간 크기 기본 패딩 및 텍스트 크기
};

/**
 * 버튼 색상별 스타일 모음
 * 배경색과 글자색을 정의함
 * 필요 시 색상 추가 가능
 */
const colorStyles = {
  purple: "bg-[#AB54DB] text-white", // 기본 보라색 배경과 흰색 텍스트
  // 호버 색상은 ableStyles에서 처리
};

/**
 * 버튼이 활성(클릭 가능) 상태일 때 적용할 스타일
 * - 마우스 커서 포인터로 변경
 * - 호버 시 배경색 진해짐
 * - 클릭 시 살짝 축소되는 애니메이션 효과
 */
const ableStyles = "hover:bg-[#8e3db9] hover:cursor-pointer active:scale-95";

/**
 * 버튼이 비활성(비활성화) 상태일 때 적용할 스타일
 * - 투명도 낮춤
 * - 커서 금지 모양으로 변경
 */
const disabledStyles = "opacity-70 cursor-not-allowed";

/**
 * Button 컴포넌트 Props 타입 정의
 * - ButtonHTMLAttributes 상속하여 기본 버튼 속성 모두 포함
 * - children: 버튼 내부에 들어갈 내용(텍스트, 요소 등)
 * - color: 버튼 색상 (colorStyles 키 값 중 선택)
 * - size: 버튼 크기 (sizeStyles 키 값 중 선택)
 * - icon: 버튼 내에 표시할 아이콘 (ReactNode 타입)
 * - iconPosition: 아이콘 위치 (left, right, center 중 선택)
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: keyof typeof colorStyles;
  size?: keyof typeof sizeStyles;
  icon?: ReactNode;
  iconPosition?: "left" | "right" | "center";
}

/**
 * 재사용 가능한 버튼 컴포넌트
 *
 * @param children - 버튼에 표시할 내용(주로 텍스트)
 * @param type - 버튼 타입 (기본값: "button")
 * @param color - 버튼 색상 (기본값: "purple")
 * @param size - 버튼 크기 (기본값: "md")
 * @param disabled - 버튼 비활성화 여부 (기본값: false)
 * @param icon - 버튼 내에 함께 표시할 아이콘(옵션)
 * @param iconPosition - 아이콘 위치 (기본값: "left")
 * @param className - 추가로 적용할 CSS 클래스명(옵션)
 * @param props - 그 외 기본 버튼 속성들 (onClick, id 등)
 */
export function Button({
  children,
  type = "button",
  color = "purple",
  size = "md",
  disabled = false,
  icon,
  iconPosition = "left",
  className,
  ...props
}: ButtonProps) {
  /**
   * 아이콘을 지정한 위치에 렌더링하는 함수
   * - icon이 있고, iconPosition과 일치하는 위치에만 표시
   * - 위치에 따라 좌우 마진 조절하여 텍스트와 간격 유지
   */
  const renderIcon = (position: "left" | "right" | "center") =>
    icon && iconPosition === position ? (
      <span
        className={clsx(
          position === "center" ? "m-0" : position === "left" ? "mr-2" : "ml-2"
        )}
      >
        {icon}
      </span>
    ) : null;

  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        baseStyles, // 기본 버튼 스타일
        sizeStyles[size], // 크기별 스타일
        colorStyles[color], // 색상별 스타일
        disabled ? disabledStyles : ableStyles, // 활성/비활성 스타일 분기
        className // 사용자 지정 추가 클래스명
      )}
      {...props} // onClick, aria-*, id 등 기타 속성 전달
    >
      {renderIcon("left")}
      {renderIcon("center")}
      {children}
      {renderIcon("right")}
    </button>
  );
}

// 1. 기본 사용법 (type, size, color, className 등 전달)
// <Button type="submit" className="w-full mb-6" color="purple" size="md">
//   Login
// </Button>

// 2. 아이콘이 있는 경우 예시
// <Button icon={<FaUser />} iconPosition="left" color="purple">
//   Profile
// </Button>
