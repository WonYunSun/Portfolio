import React from "react";

export const HeroComp = () => {
  return (
    <div className="flex items-center h-screen px-6 sm:px-12 lg:px-24">
      <div className="">
        <div className="text-8xl ">
          <p>프론트엔드 개발자</p>
          <p>
            <span className="text-(--color-indigo-600) ">원윤선</span>입니다.
          </p>
        </div>

        <div className="text-3xl text-(--color-gray-400)">
          <p>
            사용자 경험을 고민하며, 협업을 통해 가치를 만들어가는 개발자입니다.
          </p>
        </div>
      </div>
    </div>
  );
};
