import { exec } from "./solution";
import * as path from "path";

test("first example equal to 150", () => {
  const data_path = path.join(__dirname, "sample_data.txt");
  expect(exec(0, data_path) == 150);
});

test("second example equal to 900", () => {
  const data_path = path.join(__dirname, "sample_data.txt");
  expect(exec(1, data_path) == 900);
});
