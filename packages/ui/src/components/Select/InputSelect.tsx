import { CommandGroup, CommandItem, CommandList, CommandInput } from './Command/Commnad';
import { Command as CommandPrimitive } from 'cmdk';
import { useState, useRef, useCallback, type KeyboardEvent } from 'react';
import { Check } from 'lucide-react';
import { cn } from '../../lib/utils';

export type Option = Record<'value' | 'label', string> & Record<string, string>;

type InputSelectProps = {
  options: Option[];
  emptyMessage?: string;
  value?: Option;
  onValueChange?: (value: Option) => void;
  isLoading?: boolean;
  disabled?: boolean;
  placeholder?: string;
};

const InputSelect = ({
  options,
  placeholder,
  emptyMessage,
  value,
  onValueChange,
  disabled,
  isLoading = false,
}: InputSelectProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option>(value as Option);
  const [inputValue, setInputValue] = useState(value?.label || '');

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (!input) return;

      if (!isOpen) setOpen(true);

      if (e.key === 'Enter' && input.value !== '') {
        const optionToSelect = options.find((option) => option.label === input.value);
        if (optionToSelect) {
          setSelected(optionToSelect);
          onValueChange?.(optionToSelect);
        }
      }

      if (e.key === 'Escape') {
        input.blur();
      }
    },
    [isOpen, options, onValueChange],
  );

  const handleBlur = useCallback(() => {
    setOpen(false);
    setInputValue(selected?.label || '');
  }, [selected]);

  const handleSelectOption = useCallback(
    (selectedOption: Option) => {
      setInputValue(selectedOption.label);
      setSelected(selectedOption);
      onValueChange?.(selectedOption);

      requestAnimationFrame(() => {
        inputRef?.current?.blur();
      });
    },
    [onValueChange],
  );

  return (
    <CommandPrimitive onKeyDown={handleKeyDown}>
      <span>{selected?.label}</span>
      <CommandInput
        ref={inputRef}
        value={inputValue}
        onValueChange={isLoading ? undefined : setInputValue}
        onBlur={handleBlur}
        onFocus={() => {
          setOpen(true);
          setInputValue('');
        }}
        placeholder={placeholder}
        disabled={disabled}
        className="text-base"
      />
      <div className="relative mt-1">
        <div
          className={cn(
            'animate-in fade-in-0 zoom-in-95 absolute top-0 z-10 w-full bg-white outline-none',
            isOpen ? 'block' : 'hidden',
          )}>
          <CommandList className="rounded-2xl ring-slate-200">
            {isLoading ? (
              <CommandPrimitive.Loading>
                <div className="p-1">Loading</div>
              </CommandPrimitive.Loading>
            ) : null}

            {options.length > 0 && !isLoading ? (
              <CommandGroup>
                {options.map((option) => {
                  const isSelected = selected?.value === option.value;
                  return (
                    <CommandItem
                      key={option.value}
                      value={option.label}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onSelect={() => handleSelectOption(option)}
                      className={cn('flex w-full items-center gap-2', !isSelected ? 'pl-8' : null)}>
                      {isSelected ? <Check className="w-4" /> : null}
                      {option.label}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            ) : null}

            {!isLoading && options.length === 0 ? (
              <CommandPrimitive.Empty className="select-none rounded-sm px-2 py-3 text-center text-sm">
                {emptyMessage ?? 'No options found'}
              </CommandPrimitive.Empty>
            ) : null}
          </CommandList>
        </div>
      </div>
    </CommandPrimitive>
  );
};

export default InputSelect;
