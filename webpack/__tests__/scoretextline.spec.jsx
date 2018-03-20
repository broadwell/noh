import React from "react";
import { shallow } from "enzyme";
import ScoreTextLine from "../components/ScoreTextLine";
import phrases from "./__fixtures__/phrases.json";

describe("<ScoreTextLine>", () => {
  it("renders as expected by default", () => {
    const component = shallow(
      <ScoreTextLine
        textGrid={phrases.phrases[0].syllableText.grid}
        numberGrid={phrases.phrases[0].syllableNumber.grid}
        length={13}
        rangeGrid={phrases.phrases[0].vocalRange.grid}
      />
    );
    expect(component).toMatchSnapshot();
  });
  it("renders as expected with empty text and number grid", () => {
    const component = shallow(
      <ScoreTextLine
        textGrid={[]}
        numberGrid={[]}
        length={13}
        rangeGrid={phrases.phrases[0].vocalRange.grid}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
