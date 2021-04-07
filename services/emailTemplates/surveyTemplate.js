const keys = require("../../config/keys.js");

module.exports = (survey) => {
  return `
  <html>
    <body>
      <div style="text-align: center; border: 1px solid lightgrey; background-color: lightyellow; padding: 3rem">
        <h3>I'd like your response!</h3>
        <div>
          <p>Please answer the following question</p>
          <p>${survey.body}</p>

          <div>
              <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes" style="text-decoration: none">Yes</a>
              <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no" style="text-decoration: none">No</a>
          </div>

        </div>
      </div>
    </body>
  </html>
  `;
};
