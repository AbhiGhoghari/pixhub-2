'use client';
import React, { isValidElement } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { FaChevronDown } from 'react-icons/fa6';

const AccordionContext = React.createContext({
  isActive: false,
  value: '',
  onChangeIndex: () => {},
});
const useAccordion = () => React.useContext(AccordionContext);

export function AccordionContainer({ children, className }) {
  return (
    <div className={cn('grid grid-cols-2 gap-1', className)}>{children}</div>
  );
}

export function AccordionWrapper({ children }) {
  return <div>{children}</div>;
}

export function Accordion({ children, multiple, defaultValue }) {
  const [activeIndex, setActiveIndex] = React.useState(
    multiple
      ? defaultValue
        ? Array.isArray(defaultValue)
          ? defaultValue
          : [defaultValue]
        : []
      : defaultValue
        ? Array.isArray(defaultValue)
          ? [defaultValue[0]]
          : [defaultValue]
        : []
  );

  function onChangeIndex(value) {
    setActiveIndex((currentActiveIndex) => {
      if (!multiple) {
        return value === currentActiveIndex[0] ? [] : [value];
      }
      if (currentActiveIndex.includes(value)) {
        return currentActiveIndex.filter((i) => i !== value);
      }
      return [...currentActiveIndex, value];
    });
  }

  return React.Children.map(children, (child) => {
    if (!isValidElement(child)) return null;
    const value = child.props.value ?? '';
    const isActive = multiple
      ? activeIndex.includes(value)
      : activeIndex[0] === value;

    return (
      <AccordionContext.Provider value={{ isActive, value, onChangeIndex }}>
        {React.cloneElement(child)}
      </AccordionContext.Provider>
    );
  });
}

export function AccordionItem({ children, value }) {
  const { isActive } = useAccordion();

  return (
    <div
      data-active={isActive || undefined}
      data-value={value}
      className={cn(
        'rounded-lg overflow-hidden mb-2 transition-colors',
        isActive
          ? // active: blue border + subtle glow + deep navy fill
            'border-2 border-blue-500/60 shadow-[0_0_0_3px_rgba(59,130,246,0.12)] bg-[#0b1224]'
          : // idle: transparent border, highlights on hover
            'border-2 border-transparent hover:border-blue-500/40 bg-transparent'
      )}
    >
      {children}
    </div>
  );
}

export function AccordionHeader({ children, customIcon, className }) {
  const { isActive, value, onChangeIndex } = useAccordion();

  return (
    <motion.div
      data-active={isActive || undefined}
      onClick={() => onChangeIndex(value)}
      className={cn(
        // layout & typography
        'group p-4 cursor-pointer transition-colors font-semibold flex justify-between items-center',
        // base colors
        'text-blue-100',
        // idle/hover/active backgrounds
        isActive
          ? 'bg-[#0e1530]' // active navy-indigo
          : 'bg-[#0b0f1a] hover:bg-[#101936]', // idle dark → hover slightly brighter
        className
      )}
    >
      {children}
      {!customIcon && (
        <FaChevronDown
          className={cn(
            'transition-transform text-blue-200/80',
            isActive ? 'rotate-180' : 'rotate-0'
          )}
        />
      )}
    </motion.div>
  );
}

export function AccordionPanel({ children, className }) {
  const { isActive } = useAccordion();

  return (
    <AnimatePresence initial={true}>
      {isActive && (
        <motion.div
          data-active={isActive || undefined}
          initial={{ height: 0, overflow: 'hidden' }}
          animate={{ height: 'auto', overflow: 'hidden' }}
          exit={{ height: 0 }}
          transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
          className={cn(
            // panel fill to match theme
            'group bg-[#0a1224]',
            className
          )}
        >
          <motion.article
            initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
            exit={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
            className="p-3 bg-transparent text-blue-100/90"
          >
            {children}
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
