'use client';

import { ArrowLeft, User, Mail, Phone, MapPin, Clock, Star, Award, Calendar, Settings } from 'lucide-react';
import Link from 'next/link';

export default function WaiterProfile() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/waiter">
          <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Profile Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900">John Smith</h2>
              <p className="text-gray-600">Senior Waiter</p>
              <div className="flex items-center gap-2 mt-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium">4.8 Rating</span>
                <span className="text-sm text-gray-500">• Employee ID: W001</span>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700">john.smith@restaurant.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700">123 Main Street, City, State 12345</span>
            </div>
          </div>
        </div>

        {/* Work Schedule */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Work Schedule</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-gray-500" />
              <div>
                <p className="font-medium text-gray-900">Current Shift</p>
                <p className="text-sm text-gray-600">10:00 AM - 6:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-500" />
              <div>
                <p className="font-medium text-gray-900">Days Off</p>
                <p className="text-sm text-gray-600">Sunday, Monday</p>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Stats</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">156</div>
              <p className="text-sm text-gray-600">Tables Served Today</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">$2,450</div>
              <p className="text-sm text-gray-600">Total Sales Today</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">4.8</div>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Achievements</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
              <Award className="w-5 h-5 text-yellow-600" />
              <div>
                <p className="font-medium text-gray-900">Employee of the Month</p>
                <p className="text-sm text-gray-600">December 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <Star className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-gray-900">Perfect Customer Rating</p>
                <p className="text-sm text-gray-600">5.0 stars for 30 consecutive days</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <Award className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Sales Target Achieved</p>
                <p className="text-sm text-gray-600">Exceeded monthly target by 15%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Clock className="w-6 h-6 mx-auto mb-2 text-gray-600" />
              <span className="text-sm font-medium">Clock In/Out</span>
            </button>
            <button className="p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Calendar className="w-6 h-6 mx-auto mb-2 text-gray-600" />
              <span className="text-sm font-medium">View Schedule</span>
            </button>
            <button className="p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Star className="w-6 h-6 mx-auto mb-2 text-gray-600" />
              <span className="text-sm font-medium">View Reviews</span>
            </button>
            <button className="p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Settings className="w-6 h-6 mx-auto mb-2 text-gray-600" />
              <span className="text-sm font-medium">Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}