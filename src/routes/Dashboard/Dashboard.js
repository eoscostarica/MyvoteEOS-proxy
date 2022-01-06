import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { MainContainer } from 'containers'

import MainPage from './MainPage'
import DashboardSidebar from './DashboardSidebar'
import DashboardTopbar from './DashboardTopbar'

const Dashboard = ({ ual }) => {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [useBackdrop] = useState(false)

  return (
    <MainContainer
      openSidebar={openSidebar}
      setOpenSidebar={setOpenSidebar}
      topbarContent={
        <DashboardTopbar
          user={ual.activeUser}
          onLogout={() => ual.logout()}
          onLogin={() => ual.showModal()}
        />
      }
      sidebarContent={
        <DashboardSidebar
          user={ual.activeUser}
          onLogout={() => ual.logout()}
          onLogin={() => ual.showModal()}
          setOpenSidebar={setOpenSidebar}
        />
      }
    >
      <MainPage ual={ual} useBackdrop={useBackdrop} />
    </MainContainer>
  )
}

Dashboard.propTypes = {
  ual: PropTypes.object
}

Dashboard.defaultProps = {
  ual: {}
}

export default Dashboard
