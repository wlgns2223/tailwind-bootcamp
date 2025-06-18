"use client";

import { useState } from "react";

export default function GridLiveCodingDemo() {
  // 강사가 실시간으로 수정할 수 있는 상태들
  const [containerClasses, setContainerClasses] = useState("");
  const [titleClasses, setTitleClasses] = useState("");
  const [gridClasses, setGridClasses] = useState("");
  const [cellClasses, setCellClasses] = useState("");
  const [spanClasses, setSpanClasses] = useState("");
  const [flowClasses, setFlowClasses] = useState("");
  const [flowItemClasses, setFlowItemClasses] = useState("");

  const steps = [
    {
      name: "기본 컨테이너",
      key: "container",
      hint: "w-full p-4 bg-gray-200 rounded-md mt-8",
      description: "전체 너비, 패딩, 배경색, 상단 여백",
    },
    {
      name: "제목 스타일",
      key: "title",
      hint: "text-2xl font-semibold mb-4",
      description: "큰 텍스트, 두꺼운 글씨, 아래 여백",
    },
    {
      name: "Grid 컨테이너",
      key: "grid",
      hint: "grid grid-cols-3 gap-4",
      description: "3컬럼 그리드, 아이템 간 간격",
    },
    {
      name: "Grid 셀",
      key: "cell",
      hint: "p-4 bg-gray-100 rounded",
      description: "패딩, 배경색, 모서리 둥글게",
    },
    {
      name: "Span 클래스",
      key: "span",
      hint: "col-span-2",
      description: "2개 컬럼에 걸쳐 확장",
    },
    {
      name: "Flow 컨테이너",
      key: "flow",
      hint: "grid grid-flow-col grid-rows-2 gap-4 mt-6",
      description: "세로 플로우, 2행, 상단 여백",
    },
    {
      name: "Flow 아이템",
      key: "flowItem",
      hint: "p-4 bg-indigo-500 text-white rounded",
      description: "패딩, 배경색, 텍스트 색상",
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getCurrentClasses = (key: string) => {
    switch (key) {
      case "container":
        return containerClasses;
      case "title":
        return titleClasses;
      case "grid":
        return gridClasses;
      case "cell":
        return cellClasses;
      case "span":
        return spanClasses;
      case "flow":
        return flowClasses;
      case "flowItem":
        return flowItemClasses;
      default:
        return "";
    }
  };

  const setCurrentClasses = (key: string, value: string) => {
    switch (key) {
      case "container":
        setContainerClasses(value);
        break;
      case "title":
        setTitleClasses(value);
        break;
      case "grid":
        setGridClasses(value);
        break;
      case "cell":
        setCellClasses(value);
        break;
      case "span":
        setSpanClasses(value);
        break;
      case "flow":
        setFlowClasses(value);
        break;
      case "flowItem":
        setFlowItemClasses(value);
        break;
    }
  };

  const resetAll = () => {
    setContainerClasses("");
    setTitleClasses("");
    setGridClasses("");
    setCellClasses("");
    setSpanClasses("");
    setFlowClasses("");
    setFlowItemClasses("");
  };

  const applyHint = (stepIndex: number) => {
    const step = steps[stepIndex];
    setCurrentClasses(step.key, step.hint);
  };

  return (
    <div className="space-y-6">
      {/* 컨트롤 패널 */}
      <div className="bg-white p-4 rounded-lg border-2 border-orange-200">
        <h4 className="font-semibold text-gray-700 mb-3">
          🎛️ 강사 컨트롤 패널
        </h4>

        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={resetAll}
            className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors"
          >
            🔄 초기화
          </button>
          {steps.map((step, index) => (
            <button
              key={step.key}
              onClick={() => applyHint(index)}
              className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded hover:bg-gray-300 transition-colors"
            >
              {index + 1}. {step.name}
            </button>
          ))}
        </div>

        <div className="p-3 bg-orange-50 rounded border border-orange-200">
          <div className="text-sm">
            <strong>Grid 핵심 개념:</strong> display: grid → grid,
            grid-template-columns → grid-cols-*, grid-column: span 2 →
            col-span-2
          </div>
        </div>
      </div>

      {/* 실제 렌더링 결과 */}
      <div className="border-2 border-dashed border-orange-300 rounded-lg p-4 bg-white min-h-[300px]">
        <section
          className={
            containerClasses ||
            "p-4 border-2 border-dashed border-gray-300 rounded"
          }
        >
          <h2 className={titleClasses || "text-lg text-gray-400"}>
            Grid Examples
          </h2>

          <div className={gridClasses || "space-y-4"}>
            <div
              className={cellClasses || "p-4 border border-gray-200 rounded"}
            >
              Grid 1
            </div>
            <div
              className={cellClasses || "p-4 border border-gray-200 rounded"}
            >
              Grid 2
            </div>
            <div
              className={cellClasses || "p-4 border border-gray-200 rounded"}
            >
              Grid 3
            </div>
            <div
              className={`${
                cellClasses || "p-4 border border-gray-200 rounded"
              } ${spanClasses}`}
            >
              Span 2 Columns
            </div>
            <div
              className={cellClasses || "p-4 border border-gray-200 rounded"}
            >
              Grid 6
            </div>
          </div>

          <div className={flowClasses || "mt-6 space-y-4"}>
            <div
              className={`${
                flowItemClasses || "p-4 border border-gray-300 rounded"
              } row-span-2`}
            >
              Row Span 2
            </div>
            <div
              className={
                flowItemClasses || "p-4 border border-gray-300 rounded"
              }
            >
              Item 1
            </div>
            <div
              className={
                flowItemClasses || "p-4 border border-gray-300 rounded"
              }
            >
              Item 2
            </div>
            <div
              className={
                flowItemClasses || "p-4 border border-gray-300 rounded"
              }
            >
              Item 3
            </div>
            <div
              className={
                flowItemClasses || "p-4 border border-gray-300 rounded"
              }
            >
              Item 4
            </div>
          </div>
        </section>
      </div>

      {/* 생성된 코드 표시 */}
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto">
        <div className="text-white mb-2">📋 생성된 TailwindCSS 코드:</div>
        <pre>{`<section className="${
          containerClasses || "[컨테이너 클래스를 입력하세요]"
        }">
  <h2 className="${titleClasses || "[제목 클래스를 입력하세요]"}">
    Grid Examples
  </h2>
  
  <div className="${gridClasses || "[Grid 컨테이너 클래스를 입력하세요]"}">
    <div className="${
      cellClasses || "[Grid 셀 클래스를 입력하세요]"
    }">Grid 1</div>
    <div className="${
      cellClasses || "[Grid 셀 클래스를 입력하세요]"
    }">Grid 2</div>
    <div className="${
      cellClasses || "[Grid 셀 클래스를 입력하세요]"
    }">Grid 3</div>
    <div className="${cellClasses || "[Grid 셀 클래스를 입력하세요]"} ${
          spanClasses || "[Span 클래스를 입력하세요]"
        }">
      Span 2 Columns
    </div>
    <div className="${
      cellClasses || "[Grid 셀 클래스를 입력하세요]"
    }">Grid 6</div>
  </div>
  
  <div className="${flowClasses || "[Flow 컨테이너 클래스를 입력하세요]"}">
    <div className="${
      flowItemClasses || "[Flow 아이템 클래스를 입력하세요]"
    } row-span-2">
      Row Span 2
    </div>
    <div className="${
      flowItemClasses || "[Flow 아이템 클래스를 입력하세요]"
    }">Item 1</div>
    <div className="${
      flowItemClasses || "[Flow 아이템 클래스를 입력하세요]"
    }">Item 2</div>
    <div className="${
      flowItemClasses || "[Flow 아이템 클래스를 입력하세요]"
    }">Item 3</div>
    <div className="${
      flowItemClasses || "[Flow 아이템 클래스를 입력하세요]"
    }">Item 4</div>
  </div>
</section>`}</pre>
      </div>
    </div>
  );
}
