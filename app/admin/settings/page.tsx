'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Save, MessageCircle, Mail, Globe, Shield } from 'lucide-react'

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    whatsappNumber: '+31202101694',
    contactEmail: 'info@mmre.nl',
    notificationEmail: 'team@mmre.nl',
    officeAddress: 'Amsterdam, Netherlands',
    officeHours: 'Mon - Fri: 9:00 - 18:00\nSat: 10:00 - 15:00',
    socialFacebook: '',
    socialInstagram: '',
    socialLinkedin: '',
  })

  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    setSaving(true)
    // In production, this would save to the database
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSaving(false)
    alert('Settings saved!')
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">Manage site configuration</p>
        </div>
        <Button onClick={handleSave} disabled={saving}>
          <Save className="mr-2 h-4 w-4" />
          {saving ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* WhatsApp Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-green-600" />
              WhatsApp Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                WhatsApp Business Number
              </label>
              <Input
                value={settings.whatsappNumber}
                onChange={(e) => setSettings({ ...settings, whatsappNumber: e.target.value })}
                placeholder="+31202101694"
              />
              <p className="text-xs text-gray-500 mt-1">
                Include country code (e.g., +31 for Netherlands)
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-700">
                <strong>Preview:</strong> WhatsApp buttons will open a chat with {settings.whatsappNumber}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Email Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-accent" />
              Email Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Email (shown on website)
              </label>
              <Input
                value={settings.contactEmail}
                onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                placeholder="info@mmre.nl"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Notification Email (receives lead alerts)
              </label>
              <Input
                value={settings.notificationEmail}
                onChange={(e) => setSettings({ ...settings, notificationEmail: e.target.value })}
                placeholder="team@mmre.nl"
              />
              <p className="text-xs text-gray-500 mt-1">
                New leads will trigger email notifications to this address
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Office Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-accent" />
              Office Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Office Address
              </label>
              <Input
                value={settings.officeAddress}
                onChange={(e) => setSettings({ ...settings, officeAddress: e.target.value })}
                placeholder="Amsterdam, Netherlands"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Office Hours
              </label>
              <Textarea
                value={settings.officeHours}
                onChange={(e) => setSettings({ ...settings, officeHours: e.target.value })}
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Social Links */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-accent" />
              Social Media Links
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Facebook URL
              </label>
              <Input
                value={settings.socialFacebook}
                onChange={(e) => setSettings({ ...settings, socialFacebook: e.target.value })}
                placeholder="https://facebook.com/mmre"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Instagram URL
              </label>
              <Input
                value={settings.socialInstagram}
                onChange={(e) => setSettings({ ...settings, socialInstagram: e.target.value })}
                placeholder="https://instagram.com/mmre"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                LinkedIn URL
              </label>
              <Input
                value={settings.socialLinkedin}
                onChange={(e) => setSettings({ ...settings, socialLinkedin: e.target.value })}
                placeholder="https://linkedin.com/company/mmre"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Admin Users Section */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Admin Users</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Manage users who can access this admin panel.
          </p>
          <div className="border rounded-lg divide-y">
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">Admin</p>
                <p className="text-sm text-gray-500">admin@mmre.nl</p>
              </div>
              <span className="px-2 py-1 bg-highlight text-accent text-xs rounded-full">
                Admin
              </span>
            </div>
          </div>
          <Button variant="outline" className="mt-4">
            Add User
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
