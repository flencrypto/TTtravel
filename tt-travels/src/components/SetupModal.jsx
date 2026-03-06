import React from 'react'
import { Link } from 'react-router-dom'
import { INTEGRATIONS } from '../integrations/requirements'

/**
 * SetupModal — displayed when a user triggers a feature that needs configuration.
 *
 * Props:
 *   integrationId  (string)   — id from the INTEGRATIONS registry
 *   onClose        (function) — called when the user dismisses the modal
 */
function SetupModal({ integrationId, onClose }) {
  const integration = INTEGRATIONS.find((i) => i.id === integrationId)
  if (!integration) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="setup-modal-title"
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-1">
              Setup required
            </span>
            <h2 id="setup-modal-title" className="text-lg font-bold text-gray-900">
              {integration.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none mt-0.5"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600">{integration.description}</p>

        {/* Missing env vars */}
        {integration.envVars.length > 0 && (
          <div className="bg-gray-50 rounded-xl border p-3 space-y-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Required environment variable{integration.envVars.length > 1 ? 's' : ''}
            </p>
            {integration.envVars.map((v) => (
              <code
                key={v}
                className="block text-sm font-mono bg-white border rounded px-2 py-1 text-blue-700"
              >
                {v}
              </code>
            ))}
          </div>
        )}

        {/* Steps */}
        <div className="space-y-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
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

        {/* Note */}
        {integration.note && (
          <p className="text-xs text-gray-400 italic">{integration.note}</p>
        )}

        {/* Actions */}
        <div className="flex gap-3 pt-1">
          <Link
            to="/setup"
            onClick={onClose}
            className="flex-1 text-center bg-blue-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Go to Setup page
          </Link>
          <button
            onClick={onClose}
            className="flex-1 text-center border text-sm font-medium py-2 rounded-lg hover:bg-gray-50 transition"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  )
}

export default SetupModal
