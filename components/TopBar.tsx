import Link from 'next/link'
import {
  TopAppBar,
  TopAppBarActionItem, TopAppBarFixedAdjust,
  TopAppBarNavigationIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from '@rmwc/top-app-bar'

interface TopBarProps {
  title?: string,
  goBackPath?: string,
  showHomeIcon?: boolean,
}

export const TopBar = ({ title, goBackPath, showHomeIcon }: TopBarProps) => {
  return (
    <>
      <TopAppBar fixed>
        <TopAppBarRow>
        <TopAppBarSection alignStart>
        {
          goBackPath &&
            <Link href={goBackPath}>
              <a title="Go Back"><TopAppBarNavigationIcon icon="arrow_back"/></a>
            </Link>
        }
          <TopAppBarTitle>{ title }</TopAppBarTitle>
        </TopAppBarSection>
        {
          showHomeIcon &&
            <TopAppBarSection alignEnd>
              <TopAppBarActionItem icon="home" title="Return to Home Page" />
            </TopAppBarSection>
        }
      </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
    </>
  )
}
