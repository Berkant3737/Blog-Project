import React from 'react'

function ContactForm() {
  return (
    <div className="container contact-form">
      <h1 className="text-center mt-5">İletişim</h1>
      <div className="row justify-content-center mt-4">
        <div className="col-12 col-md-7">
          <form action="" className="">
            <div class="mb-3">
              <label class="form-label">
                Adınız
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Adınız"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">
                Email Adresiniz
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Email Adresiniz"
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Mesajınız
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="7"
                placeholder='Mesajınız'
              ></textarea>
            </div>
            <div className="text-center">
            <button className='btn btn-warning text-center fw-bold py-3 px-5'>Gönder</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
