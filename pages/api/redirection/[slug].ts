export default (req, res) => {
  const { slug } = req.query
  res.redirect('https://www.themoviedb.org/movie/' + slug)
}