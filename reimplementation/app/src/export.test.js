import { buildCSV, buildHTML } from "./export";
import PrepTemplate from "./prep.js";

const TestTemplate = {
  name: "Test Template",
  pdf: "https://www.example.com/document.pdf",
  number: "7",
  observable: "Room",
  title: "Isolation: A basic test",
  instructions: "Use this template to test logic.",
  sections: [
    {
      header: "Section One",
      choiceSet: ["Yes", "No"],
      questions: [
        {
          text: "Q1",
          choices: ["Yes", "No"]
        },
        {
          text: "Q2",
          choices: ["Yes", "No"]
        },
        {
          text: "Q3",
          choices: ["Yes", "No"]
        },
        {
          text: "Q4",
          choices: ["Yes", "No"]
        }
      ]
    }
  ]
};

test("converts template and ledger to CSV", () => {
  const { template, ledger } = PrepTemplate(TestTemplate);
  const csv = buildCSV({ template, ledger });
  expect(csv).toBe(`"Q1","Q2","Q3","Q4"\n,,,`);
});

test("converts template and ledger to HTML", () => {
  const { template, ledger } = PrepTemplate(TestTemplate);
  const html = buildHTML({ template, ledger });
  expect(html).toContain(`<tr><td>Q1</td><td></td></tr>`);
});
