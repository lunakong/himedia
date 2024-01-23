import React from 'react';

const contactText=[
  {
    link:"http://kakao.com/",title:"KAKAO : daifu",
  },
  {
    link:"http://kakao.com/",title:"mail : daifu@nate.com",
  }
]

const Contact = () => {
  return (
    <section id="contact">
            <div className="contact_inner">
                <h2 className="contact_title">Contact</h2>
                <div className="contact_lines top" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="contact_text">
                    <div className="text">
                        {contactText.map((contact,key)=>(
                          <div key={key}>
                            <a href={contact.link} target="_blank" rel='noopener noreferrer'>{contact.title}</a>
                          </div>
                        ))}
                    </div>
                </div>
                <div className="contact_lines bottom" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </section>
  )
}

export default Contact
