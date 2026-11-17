import type { ReactNode } from 'react'
import { ArrowLeft, HardDrive, UserRound } from 'lucide-react'
import type { AppLanguage } from '../language'
import JournalCloudPanel, { type JournalCloudControls } from './JournalCloudPanel'
import './settings.css'

export default function LiveStoragePage({ account, journalSync, language, onSaveCopy, onBack, backLabel }: {
  account?: ReactNode
  journalSync: JournalCloudControls
  language: AppLanguage
  onSaveCopy: () => void
  onBack: () => void
  backLabel: string
}) {
  const ru = language === 'ru'
  return <main className="settings-page live-storage-page" aria-labelledby="live-storage-title">
    <button type="button" className="live-storage-page__back" onClick={onBack}>
      <ArrowLeft size={17} aria-hidden="true" />{backLabel}
    </button>
    <div className="live-storage-page__heading">
      <span className="live-storage-page__mark" aria-hidden="true"><HardDrive size={25} /></span>
      <div>
        <h1 id="live-storage-title">Live Storage</h1>
        <p>{ru ? 'Аккаунт и сохранение Journal — в одном месте.' : 'Your account and Journal storage in one place.'}</p>
      </div>
    </div>
    <div className="live-storage-page__sections">
      <section className="live-storage-page__card" aria-labelledby="live-account-title">
        <h2 id="live-account-title"><UserRound size={19} aria-hidden="true" />Live Account</h2>
        {account ?? <p className="settings-page__description">{ru ? 'Вход в аккаунт пока недоступен. Ваши данные на этом устройстве не меняются.' : 'Account sign-in is currently unavailable. Data on this device is unchanged.'}</p>}
      </section>
      <section className="live-storage-page__card" aria-label={ru ? 'Хранение Journal' : 'Journal storage'}>
        <JournalCloudPanel cloud={journalSync} language={language} onSaveCopy={onSaveCopy} />
      </section>
    </div>
  </main>
}
