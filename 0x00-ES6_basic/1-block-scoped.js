/* variables aren’t overwritten inside the conditional block */
export default function taskBlock(trueOrFalse) {
    const task = false;
    const task2 = true;

    if (trueOrFalse) {
      var task = true;
      var task2 = false;
    }

    return [task, task2];
  }
