import { useEffect, useState } from 'react'

function InstallAppPrompt() {
  const [promptEvent, setPromptEvent] = useState(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onBeforeInstallPrompt = (event) => {
      event.preventDefault()
      setPromptEvent(event)
      setVisible(true)
    }

    const onAppInstalled = () => {
      setVisible(false)
      setPromptEvent(null)
    }

    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt)
    window.addEventListener('appinstalled', onAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt)
      window.removeEventListener('appinstalled', onAppInstalled)
    }
  }, [])

  const install = async () => {
    if (!promptEvent) {
      return
    }

    await promptEvent.prompt()
    const result = await promptEvent.userChoice

    setVisible(false)
    setPromptEvent(null)
  }

  if (!visible) {
    return null
  }

  return (
    <div className="glass-panel rounded-2xl p-4 md:p-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="font-semibold text-slate-100">Install TT&apos;s Travels</p>
        <p className="text-sm text-slate-300">Get quicker access with an app-like home screen experience.</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:text-white hover:bg-white/10"
        >
          Maybe later
        </button>
        <button
          type="button"
          onClick={install}
          className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-900 bg-slate-100 hover:bg-white"
        >
          Install app
        </button>
      </div>
    </div>
  )
}

export default InstallAppPrompt
