import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa'
import React from 'react'

const sublinks = [
  {
    page: 'products',
    links: [
      { id: 1, label: 'payment', icon: <FaCreditCard />, url: '/products' },
      { id: 2, label: 'terminal', icon: <FaCreditCard />, url: '/products' },
      { id: 3, label: 'connect', icon: <FaCreditCard />, url: '/products' },
    ],
  },
  {
    page: 'developers',
    links: [
      { id: 4, label: 'plugins', icon: <FaBook />, url: '/products' },
      { id: 5, label: 'libraries', icon: <FaBook />, url: '/products' },
      { id: 6, label: 'help', icon: <FaBook />, url: '/products' },
      { id: 7, label: 'billing', icon: <FaBook />, url: '/products' },
    ],
  },
  {
    page: 'company',
    links: [
      { id: 8, label: 'about', icon: <FaBriefcase />, url: '/products' },
      { id: 9, label: 'customers', icon: <FaBriefcase />, url: '/products' },
    ],
  },
]

export default sublinks
