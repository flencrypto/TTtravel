import React from 'react'
import { Link } from 'react-router-dom'
import { INTEGRATIONS, isConfigured } from '../integrations/requirements'

function StatusChip({ configured }) {
  return configured ? (
    <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
      <span aria-hidden="true">✓</span> Configured
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-0.5 rounded-full">
      <span aria-hidden="true">!</span> Setup needed
    </span>
  )
}

function Setup() {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-gray-900">🔧 Setup &amp; Integrations</h1>
        <p className="text-sm text-gray-500">
          Review which features require extra configuration and follow the steps below to
          enable them.
        </p>
      </div>

      <div className="space-y-5">
        {INTEGRATIONS.map((integration) => {
          const configured = isConfigured(integration.id)
          return (
            <div
              key={integration.id}
              className="bg-white border rounded-2xl shadow-sm p-5 space-y-4"
            >
              {/* Title row */}
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div>
                  <h2 className="font-semibold text-gray-900">{integration.name}</h2>
                  <p className="text-sm text-gray-500 mt-0.5">{integration.description}</p>
                </div>
                <StatusChip configured={configured} />
              </div>

              {/* Env vars */}
              {integration.envVars.length > 0 && (
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    Required env variable{integration.envVars.length > 1 ? 's' : ''}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {integration.envVars.map((v) => (
                      <code
                        key={v}
                        className="text-sm font-mono bg-gray-50 border rounded px-2 py-0.5 text-blue-700"
                      >
                        {v}
                      </code>
                    ))}
                  </div>
                </div>
              )}

              {/* Steps */}
              {!configured && (
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    How to set it up
                  </p>
                  <ol className="list-decimal list-inside space-y-1">
                    {integration.whereToGet.map((step, i) => (
                      <li key={i} className="text-sm text-gray-700 leading-snug">
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Official links */}
              {integration.officialLinks.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {integration.officialLinks.map((link) => (
                    <a
                      key={link}
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-blue-600 underline hover:text-blue-800"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              )}

              {/* Affected routes */}
              <div className="text-xs text-gray-400">
                <span className="font-medium">Affects: </span>
                {integration.affectedActions.join(', ')}
              </div>

              {/* Security note */}
              {integration.note && (
                <p className="text-xs text-gray-400 italic border-t pt-2">{integration.note}</p>
              )}
            </div>
          )
        })}
      </div>

      <div className="pt-2">
        <Link to="/" className="text-sm text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}

export default Setup
