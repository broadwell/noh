import React from "react";

const ScoreControls = () => (
  <div className="score-controls">
    <ul className="channel-toggles">
      <li>
        <input type="checkbox" id="scoreControl1" />
        <label htmlFor="scoreControl1">Beat</label>
      </li>
      <li>
        <input type="checkbox" id="scoreControl2" />
        <label htmlFor="scoreControl2">Text</label>
      </li>
      <li>
        <input type="checkbox" id="scoreControl3" />
        <label htmlFor="scoreControl3">Percussion</label>
      </li>
      <li>
        <input type="checkbox" id="scoreControl4" />
        <label htmlFor="scoreControl4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
          >
            <g fill="#9aa0a6" fillRule="evenodd">
              <path
                fillRule="nonzero"
                d="M6,11.5 C2.96243388,11.5 0.5,9.03756612 0.5,6 C0.5,2.96243388 2.96243388,0.5 6,0.5 C9.03756612,0.5 11.5,2.96243388 11.5,6 C11.5,9.03756612 9.03756612,11.5 6,11.5 Z M6,10.5 C8.48528137,10.5 10.5,8.48528137 10.5,6 C10.5,3.51471863 8.48528137,1.5 6,1.5 C3.51471863,1.5 1.5,3.51471863 1.5,6 C1.5,8.48528137 3.51471863,10.5 6,10.5 Z"
              />
              <path
                d="M4.90165043,6 L7.90165043,6 C8.1777928,6 8.40165043,6.22385763 8.40165043,6.5 C8.40165043,6.77614237 8.1777928,7 7.90165043,7 L4.40165043,7 C4.12550805,7 3.90165043,6.77614237 3.90165043,6.5 L3.90165043,4.5 C3.90165043,4.22385763 4.12550805,4 4.40165043,4 C4.6777928,4 4.90165043,4.22385763 4.90165043,4.5 L4.90165043,6 Z"
                transform="rotate(-45 6.152 5.5)"
              />
            </g>
          </svg>
          Nohkan
        </label>
      </li>
      <li>
        <input type="checkbox" id="scoreControl5" />
        <label htmlFor="scoreControl5">Dance</label>
      </li>
    </ul>
    <ul className="measure-toggles">
      <li>
        <input type="checkbox" id="scoreControl6" />
        <label htmlFor="scoreControl6">Prev Measure</label>
      </li>
      <li>
        <input type="checkbox" id="scoreControl7" />
        <label htmlFor="scoreControl7">Next Measure</label>
      </li>
    </ul>
  </div>
);

export default ScoreControls;
