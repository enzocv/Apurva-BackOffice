import { motion } from 'framer-motion';
import { Icon, Typography } from '@mui/material';

function SuscripcionesSidebarHeader() {
  return (
    <div className="flex flex-col justify-center h-full p-24">
      <div className="flex items-center flex-1">
        <Icon
          component={motion.span}
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { delay: 0.2 } }}
          className="text-24 md:text-32"
        >
          attach_money
        </Icon>
        <Typography
          component={motion.span}
          initial={{ x: -20 }}
          animate={{ x: 0, transition: { delay: 0.2 } }}
          delay={300}
          className="text-16 md:text-24 font-semibold"
        >
          Suscripciones
        </Typography>
      </div>
    </div>
  );
}

export default SuscripcionesSidebarHeader;
