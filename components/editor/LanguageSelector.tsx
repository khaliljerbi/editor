import { LANGUAGE_CONFIG } from "@/lib/constants";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useCodeEditorStore } from "@/lib/store";

function LanguageSelector() {
  const { language, setLanguage } = useCodeEditorStore();
  return (
    <Select value={language} onValueChange={setLanguage}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          {Object.values(LANGUAGE_CONFIG).map((l) => (
            <SelectItem key={l.id} value={l.id}>
              {l.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default LanguageSelector;
