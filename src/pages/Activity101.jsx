import { Link } from 'react-router-dom'

import { useLocation } from 'react-router-dom'

const Activity101 = function () {

  const { state } = useLocation()

  // posting result

  return (
    <div>
      <div>
        <Link to="/">Go to Home</Link>
      </div>
      <h1>{state.pageName}</h1>
      <p>{state.description}</p>
      {/* container */}
      <section>
        {/* loading */}
      </section>
    </div>
  )
}

export default Activity101
