module.exports = (router) => {
  /**
   * Start url
   *
   * Redirects a user to the start of our journey
   *
   */
  router.get("/dwp-alternative-formats-plugin/start", (req, res) => {
    res.redirect("/dwp-alternative-formats-plugin/v2/journey-1/");
  });
  /**
   * Clear data
   *
   * Clears only alternative formats dwp-alternative-formats-plugin/v1/journey-3 data
   *
   */
  router.post("/dwp-alternative-formats-plugin/v2/journey-1/clear-data", (req, res) => {
    req.session.data.altFormatsV2Journey1 = {};

    res.redirect("./clear-data-success");
  });
};