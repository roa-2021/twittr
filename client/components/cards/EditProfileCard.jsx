import React from 'react'

const EditProfileCard = () => {

  const handleChange = (evt) => {
    
  }

  const handleSubmit = (evt) => {

  }

  return (
    <div className="edit-profile-container">
      <form action="" className="" onSubmit={handleSubmit}>
        <div className="edit-profile-container__header-container">
          <div className="edit-profile-container__header-svg">
            <svg viewBox="0 0 24 24" aria-hidden="true" class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"><g><path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path></g></svg>
          </div>
          <div className="edit-profile-container__header-text">
            <span>
              Edit profile
            </span>
          </div>
          <div className="edit-profile-container__header-save-button-container">
            <div className="edit-profile-container__header-save-button-text">
              <span>
                Save
              </span>
            </div>
          </div>
        </div>
        <div className="edit-profile-container__banner-container">
          <img className="edit-profile-container__banner-img" src="" />
        </div>
        <div className="edit-profile-container__profilePic-container">
          <img className="edit-profile-container__profilePic-img" src="" />
        </div>
        <div className="edit-profile-container__name-container">
          <span>Name</span>
          <input 
            type="text"
            className="name"
            placeholder="Name"
            name="name"
            autoComplete="name"
            onChange={handleChange}
            // value={formData.name}
          />
        </div>
        <div className="edit-profile-container__bio-container">
          <span>Bio</span>
          <input 
            type="text"
            className="bio"
            placeholder="Name"
            name="bio"
            autoComplete="bio"
            onChange={handleChange}
            // value={formData.bio}
          />
        </div>
      </form>
    </div>
  )
}

export default EditProfileCard
