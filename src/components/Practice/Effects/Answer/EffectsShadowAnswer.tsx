"use client";

import React from "react";

export default function EffectsShadowAnswer() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-green-700">✅ 정답 확인</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            1단계: 기본 그림자
          </h3>
          <div className="drop-shadow-sm bg-white p-6 rounded-lg border">
            <h4 className="font-semibold">기본 그림자 카드</h4>
            <p className="text-gray-600">
              부드러운 그림자가 적용된 카드입니다.
            </p>
          </div>
        </div>

        {/* 2단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            2단계: 중간 그림자
          </h3>
          <div className="drop-shadow-md bg-white p-6 rounded-lg">
            <h4 className="font-semibold">중간 그림자 카드</h4>
            <p className="text-gray-600">
              조금 더 진한 그림자가 적용된 카드입니다.
            </p>
          </div>
        </div>

        {/* 3단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            3단계: 강한 그림자
          </h3>
          <div className="drop-shadow-lg bg-white p-6 rounded-lg">
            <h4 className="font-semibold">강한 그림자 카드</h4>
            <p className="text-gray-600">
              더욱 진한 그림자가 적용된 카드입니다.
            </p>
          </div>
        </div>

        {/* 4단계 */}
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            4단계: 매우 강한 그림자
          </h3>
          <div className="drop-shadow-xl bg-white p-6 rounded-lg">
            <h4 className="font-semibold">매우 강한 그림자 카드</h4>
            <p className="text-gray-600">
              매우 진한 그림자가 적용된 카드입니다.
            </p>
          </div>
        </div>

        {/* 5단계 */}
        <div className="bg-white p-6 rounded-lg md:col-span-2 lg:col-span-1">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            5단계: 매우 매우 강한 그림자
          </h3>
          <div className="drop-shadow-2xl bg-white p-6 rounded-lg">
            <h4 className="font-semibold">매우 매우 강한 그림자 카드</h4>
            <p className="text-gray-600">
              가장 진한 그림자가 적용된 카드입니다.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-4">
          📝 사용된 TailwindCSS 클래스들:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-green-700 mb-2">
              Drop Shadow 클래스:
            </h4>
            <ul className="space-y-1 text-green-700">
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  drop-shadow-sm
                </code>{" "}
                - 기본 그림자
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  drop-shadow-md
                </code>{" "}
                - 중간 그림자
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  drop-shadow-lg
                </code>{" "}
                - 강한 그림자
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  drop-shadow-xl
                </code>{" "}
                - 매우 강한 그림자
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  drop-shadow-2xl
                </code>{" "}
                - 매우 매우 강한 그림자
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">보조 클래스:</h4>
            <ul className="space-y-1 text-green-700">
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">bg-white</code>{" "}
                - 흰색 배경
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">p-6</code> -
                패딩
              </li>
              <li>
                <code className="bg-green-100 px-2 py-1 rounded">
                  rounded-lg
                </code>{" "}
                - 모서리 둥글게
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
