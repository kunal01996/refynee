import JohnDoe from '../assets/images/john-doe.png'

export default function Profile () {

  return (
    <div className="row">
      <div className="col-10 profile-container">
        <p className="admin-name">John Doe</p>
        <p className="admin-role">Admin</p>
      </div>
      <div className="col-2 position-relative">
        <img src={JohnDoe} alt="John Doe" className="john-doe" />
        <span className='status'></span>
      </div>
    </div>
  )

}
