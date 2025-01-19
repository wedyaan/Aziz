// 'use client';
import React from 'react';
import { Grid, Card, CardContent, Typography, Container, Avatar } from '@mui/material';
import {
  Chat as ChatIcon,
  CheckCircle as CheckCircleIcon,
  People as PeopleIcon,
  AccessAlarm as AccessAlarmIcon,
  Timer as TimerIcon,
  Hearing as HearingIcon,
  SyncAlt as SyncAltIcon,
  Info as InfoIcon,
  Group as GroupIcon,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const services = {
  en: [
    { title: 'Measuring Customer Satisfaction and Analyzing KPIs', icon: <TimerIcon /> },
    { title: 'Training and Development for Teams on CX Skills', icon: <PeopleIcon /> },
    { title: 'Change Management for Improved CX', icon: <SyncAltIcon /> },
    { title: 'Designing Surveys and Feedback Mechanisms', icon: <GroupIcon /> },
    { title: 'Conducting Workshops on CX Trends', icon: <InfoIcon /> },
     { title: 'Design and Implementation of CX Projects', icon: <CheckCircleIcon /> },
    { title: 'Customer Data Analysis and Strategic Insights', icon: <AccessAlarmIcon /> },
    { title: 'Developing Tailored Strategies for Customer Loyalty', icon: <HearingIcon /> },
    { title: 'Assisting Companies in Improving Processes', icon: <ChatIcon /> },
  ],
  ar: [
    { title: 'قياس رضا العملاء وتحليل مؤشرات الأداء (KPIs)', icon: <TimerIcon /> },
    { title: 'تدريب وتطوير فرق العمل على مهارات تجربة العملاء', icon: <PeopleIcon /> },
    { title: 'إدارة التغيير في المؤسسات لتعزيز تجربة العملاء', icon: <SyncAltIcon /> },
    { title: 'تصميم وتنفيذ استبيانات وآليات لجمع ملاحظات العملاء', icon: <GroupIcon /> },
    { title: 'تقديم ورش عمل حول أحدث الاتجاهات في تجربة العملاء', icon: <InfoIcon /> },
     { title: 'تصميم وتنفيذ مشاريع تجربة العملاء', icon: <CheckCircleIcon /> },
    { title: 'تحليل بيانات العملاء وتقديم رؤى استراتيجية', icon: <AccessAlarmIcon /> },
    { title: 'تطوير استراتيجيات مخصصة لتعزيز الولاء والاحتفاظ بالعملاء', icon: <HearingIcon /> },
    { title: 'مساعدة الشركات في تحسين العمليات والأنظمة لتحسين تجربة العملاء', icon: <ChatIcon /> },
  ],
};

const Services = () => {
  const { i18n } = useTranslation(); // Get the i18n instance

  return (
    <Container maxWidth="lg" sx={{ my: 10, mb: 10 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6,color:'#66b2ff' }}>
        {i18n.language === 'en' ? 'Customer Service Skills and CX Consulting Services' : 'مهارات خدمة العملاء وخدمات استشارات تجربة العملاء'}
      </Typography>
      <Grid container spacing={4}>
        {services[i18n.language].map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card 
              variant="outlined" 
              sx={{ 
                height: '100%', // Make the card take full height
                transition: 'transform 0.3s ease', // Smooth transition for hover effect
                '&:hover': {
                  transform: 'scale(1.05)', // Scale up on hover
                  boxShadow: 3, // Optional shadow effect on hover
                }
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                <Avatar sx={{ bgcolor: 'primary.main', mb: 2 }}>
                  {service.icon}
                </Avatar>
                <Typography variant="h5" component="div" align="center">
                  {service.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;