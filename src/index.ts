export = function govukPagesPlugin(router: any, userConfig: unknown) {

  router.get("/pages", (req: any, res: any) => {
    res.render("views/page-index", {
      pages: 'Hello, world!'
    })
  })
}
