import React from 'react'
const siteText = [
  {
    text:["make","site compliant with","webstandard"],
    title:"웹 표준을 준수한 사이트제작",
    site:"",
    info:["site code","produiction period : two days","use stack : html5/css3 javascript..."]
  },
  {
    text:["design make","design compliant with","UI/UX design"],
    title:"웹페이지 디자인",
    site:"",
    info:["site design","produiction period : two days","use stack : photoshop, 일러스트레이션, 피그마, 깃허브"]
  },
  {
    text:["2design make","2design compliant with","2UI/UX design"],
    title:"2웹페이지 디자인",
    site:"",
    info:["2site design","2produiction period : two days","2use stack : photoshop, 일러스트레이션, 피그마, 깃허브"]
  },
  {
    text:["3design make","3design compliant with","3UI/UX design"],
    title:"3웹페이지 디자인",
    site:"",
    info:["3site design","3produiction period : two days","3use stack : photoshop, 일러스트레이션, 피그마, 깃허브"]
  },

]


const Site = () => {
  return (
    <section id='site'>
      <div className="site_inner">
        <div className="site_title">
          Site coding <em>작품들</em>
        </div>
        <div className="site_wrap">
          {siteText.map((site,key)=>(
            <article className={`site_item s${key + 1}`} key={key}>
            <span className='num'>0{key + 1}.</span>
            <div className="text">
              <div>{site.text[0]}</div>
              <div>{site.text[1]}</div>
              <div>{site.text[2]}</div>
            </div>
            <h3 className='title'>{site.title}</h3>
            <div className='btn'>
              <a href={site.site}>code</a>
              <a href={site.site}>view</a>
            </div>
            <div className="info">
              <span>{site.info[0]}</span>
              <span>{site.info[1]}</span>
              <span>{site.info[2]}</span>
            </div>
          </article>
          ))}  
        </div>
      </div>
    </section>
  )
}

export default Site
