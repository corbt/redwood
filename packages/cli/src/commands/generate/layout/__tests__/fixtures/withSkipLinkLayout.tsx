import { SkipNavLink, SkipNavContent } from '@redwoodjs/router'
import '@reach/skip-nav/styles.css'

/**
 * since the main content isn't usually the first thing in the document,
 * it's important to provide a shortcut for keyboard and screen-reader users to skip to the main content
 * API docs: https://reach.tech/skip-nav/#reach-skip-nav
 */

const A11yLayout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      {/* renders a link that remains hidden till focused; put it at the top of your layout */}
      <SkipNavLink />
      <nav></nav>
      {/* renders a div as the target for the link; put it next to your main content */}
      <SkipNavContent />
      <main>{children}</main>
    </>
  )
}

export default A11yLayout
