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
              <a title="Back to Home Page"><TopAppBarNavigationIcon icon="arrow_back"/></a>
            </Link>
        }
          <TopAppBarTitle>{ title }</TopAppBarTitle>
        </TopAppBarSection>
        {
          showHomeIcon &&
            <TopAppBarSection alignEnd>
              <TopAppBarActionItem icon="home" />
            </TopAppBarSection>
        }
      </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
    </>
  )
}
