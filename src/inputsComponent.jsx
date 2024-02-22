import { Button, Checkbox, Label, TextInput, Select } from 'flowbite-react';

export default function InputsComponent() {
    return (
        <form className="max-w-sm mx-auto">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email1" value="Building Level/Floor"/>
                </div>
                <TextInput id="text" type="text" placeholder="Building Level/Floor" required/>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="Address-1" value="Address Line 1"/>
                </div>
                <TextInput id="text" type="text" required/>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="Address-2" value="Address Line 2"/>
                </div>
                <TextInput id="text" type="text" required/>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="Suburb" value="Suburb"/>
                </div>
                <TextInput id="text" type="text" required/>
            </div>
            <div className="max-w-md">
                <div className="mb-2 block">
                    <Label htmlFor="countries" value="Select your country"/>
                </div>
                <Select id="countries" required>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                </Select>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="PostCode" value="Postcode"/>
                </div>
                <TextInput id="text" type="text" required/>
            </div>
            <div className="max-w-md">
                <div className="mb-2 block">
                    <Label htmlFor="State-Provinces" value="State/Provinces"/>
                </div>
                <Select id="States" required>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                </Select>
            </div>
            <div className="max-w-md">
                <div className="mb-2 block">
                    <Label htmlFor="Timezone" value="Choose a Timezone"/>
                </div>
                <Select id="Timezones" required>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                </Select>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="Compus-arrival-note" value="Compus arrival note"/>
                </div>
                <TextInput id="text" type="text" required/>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="Report" value="Person to report"/>
                </div>
                <TextInput id="text" type="text" required/>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="Add-Compus" value="Add campus manager"/>
                </div>
                <TextInput id="text" type="text" required/>
            </div>
            <div className="mb-2 block">
                <Label htmlFor="email1" value="Lable Placement"/>
            </div>
            <div className="flex items-center gap-2">

                <Checkbox id="promotion" />
                <Label htmlFor="promotion" className="flex">
                    ELICOS
                </Label>
                <Checkbox id="promotion" />
                <Label htmlFor="promotion" className="flex">
                    VET
                </Label>
                <Checkbox id="promotion" />
                <Label htmlFor="promotion" className="flex">
                    VET Other
                </Label>
            </div>
        </form>
    );
}