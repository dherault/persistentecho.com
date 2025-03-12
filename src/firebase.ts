import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyD2MZskDT9Vnmns-XflYDoIOSS7mhfW8xk',
  authDomain: 'persistent-echo.firebaseapp.com',
  projectId: 'persistent-echo',
  storageBucket: 'persistent-echo.firebasestorage.app',
  messagingSenderId: '367984541987',
  appId: '1:367984541987:web:dbac9c2b57320660d4cc96',
  measurementId: 'G-7JGYK86MJR',
}

const app = initializeApp(firebaseConfig)

export const analytics = getAnalytics(app)

export const logAnalytics = (eventName: string, eventParams?: Record<string, any>) => {
  if (!import.meta.env.PROD) return

  logEvent(analytics, eventName, eventParams)
}
