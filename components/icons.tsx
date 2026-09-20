'use client';

import React from 'react';
import {
  Server,
  ClipboardCheck,
  ShieldCheck,
  Code2,
  Wrench,
  RefreshCw,
  ScanLine,
  WifiOff,
  Clock,
  Trash2,
  ShieldAlert,
  Laptop,
  FileCheck2,
  Users,
  BarChart3,
  FileSpreadsheet,
  Activity,
  Layers,
  CheckCircle2,
  Terminal,
  Cpu,
  HardDrive,
  Network,
  Database,
  ExternalLink,
  Github,
  Mail,
  Linkedin,
  Phone,
  MapPin,
  Download,
  Eye,
  Check,
  AlertCircle,
  HelpCircle,
  LucideProps
} from 'lucide-react';

const iconMap: Record<string, React.FC<LucideProps>> = {
  Server,
  ClipboardCheck,
  ShieldCheck,
  Code2,
  Wrench,
  RefreshCw,
  ScanLine,
  WifiOff,
  Clock,
  Trash2,
  ShieldAlert,
  Laptop,
  FileCheck2,
  Users,
  BarChart3,
  FileSpreadsheet,
  Activity,
  Layers,
  CheckCircle2,
  Terminal,
  Cpu,
  HardDrive,
  Network,
  Database,
  ExternalLink,
  Github,
  Mail,
  Linkedin,
  Phone,
  MapPin,
  Download,
  Eye,
  Check,
  AlertCircle,
  HelpCircle
};

interface DynamicIconProps extends LucideProps {
  name: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  const IconComponent = iconMap[name] || HelpCircle;
  return <IconComponent {...props} />;
};
