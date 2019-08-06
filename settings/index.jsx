function settingsComponent(props) { // eslint-disable-line no-unused-vars
  return (
    <Page>
      <Section
        title={
          <Text bold align="center">
            App Settings
          </Text>
        }
      />
    </Page>
  )
}

registerSettingsPage(settingsComponent) // eslint-disable-line no-undef
