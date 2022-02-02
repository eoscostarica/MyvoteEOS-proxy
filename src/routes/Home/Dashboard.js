import React, { useState } from 'react'

import { MainContainer } from 'containers'
import { useSharedState } from 'context/state.context'

import MainPage from './MainPage'
import DashboardSidebar from './DashboardSidebar'
import DashboardTopbar from './DashboardTopbar'

const Dashboard = () => {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [useBackdrop] = useState(false)
  const [state, { login, logout }] = useSharedState()

  return (
    <MainContainer
      openSidebar={openSidebar}
      setOpenSidebar={setOpenSidebar}
      topbarContent={
        <DashboardTopbar
          user={state.ual.activeUser}
          onLogout={logout}
          onLogin={login}
        />
      }
      sidebarContent={
        <DashboardSidebar
          user={state.ual.activeUser}
          onLogout={logout}
          onLogin={login}
          setOpenSidebar={setOpenSidebar}
        />
      }
    >
      <MainPage ual={state.ual} useBackdrop={useBackdrop} />
    </MainContainer>
  )
}

export default Dashboard
