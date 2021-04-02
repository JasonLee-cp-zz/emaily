const keys = require("../../config/keys.js");

module.exports = (survey) => {
  return `
  <html>
    <body>
      <div style="text-align: center;">
        <h3>I'd like your response!</h3>
        <p>Please answer the foloowing question</p>
        <p>${survey.body}</p>

        <div>
          <button type="button">WOW</button>
          <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
          <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
          <button type="button">WOW</button>
        </div>
      </div>
    </body>
  </html>
  `;
};
