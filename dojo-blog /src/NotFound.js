const NotFound = () => {
  return ( 
    <div className = 'not-found'>
      <h2>Sorry</h2>
      <p>That the page cannot be found</p>
      <Link to = '/'>Back to the homepage...</Link>
    </div>
   );
}
 
export default NotFound;