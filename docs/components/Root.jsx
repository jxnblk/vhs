
import React from 'react'
import {
  Header,
  Footer,
  TweetButton,
  GithubButton
} from 'blk'
import Readme from './Readme.jsx'
import css from '../base.css'

class Root extends React.Component {

  render () {
    let ga = '(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create", "UA-4603832-6", "auto");ga("send", "pageview");'
    let initialProps = {
      __html: safeStringify(this.props)
    }

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>{this.props.title}</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body className='container px3 white bg-blue'>
          <div className='vhs-blur'>
            <Header {...this.props} />
          </div>
          <hr />
          <div className='py3 vhs-right vhs-delay-4'>
            <GithubButton user='jxnblk' repo='vhs' />
            <TweetButton text='VHS: Post-future CSS animations' />
          </div>
          <div className='vhs-bottom vhs-delay-3'>
            <Readme {...this.props} />
            <Footer {...this.props} />
          </div>
          <script src='docs/demo.js' />
          <script dangerouslySetInnerHTML={{ __html: ga }} />
        </body>
      </html>
    )
  }

}

function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}

export default Root

