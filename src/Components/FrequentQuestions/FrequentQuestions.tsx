import { useState } from "react";
import { QuestionsData } from "./QuestionsData";
import "../../Questions.css";

export default function FrequentQuestions() {
  const [open, setOpen] = useState<number | null>(null);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const openAnswer = (ids: number) => {
    setOpen(open === ids ? null : ids);
    setActiveQuestion(ids);
  };
  return (
    <section className="mt-10 flex justify-center items-center flex-col gap-5 ">
      {QuestionsData.map((question) => (
        <div key={question.id}>
          <div
            onClick={() => openAnswer(question.id)}
            className="question-header"
            style={{
              borderBottom:
                activeQuestion === question.id ? "" : "1px solid white",
            }}
          >
            <p
              className="font-bold text-base w-[250px]"
              style={{
                color: activeQuestion === question.id ? "#F9C305" : "white",
              }}
            >
              {question.question}
            </p>
            <span className={`arrow ${open === question.id ? "up" : "down"}`}>
              &#9660;
            </span>
          </div>
          <div className={`answer ${open === question.id ? "open" : ""}`}>
            <p className="px-[10px]">{question.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
