// Added React import to resolve the 'Cannot find namespace React' error in interface definitions
import React from 'react';

export interface StatItem {
  label: string;
  value: string;
  trend?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}