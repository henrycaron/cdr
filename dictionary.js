export const dictionary = (itemname) => {
    
    var drugs = {
        "Ibuprofen" : "Ibuprofen",
        "Advil" : "Ibuprofen",
        "Acetaminophen" : "Acetaminophen",
        "Tylenol" : "Acetaminophen",
        "Robitussin" : "Dextromethorphan",
        "Dextromethorphan" : "Dextromethorphan",
        else: "None"
     }
     
    var dict = {};
    console.log("In Dictionary");
    console.log(itemname);
    
    
    dict["Ibuprofen"] = {
        name: "Ibuprofen",
        alts: "Advil, NeoProfen",
        uses :"Nonsteroidal anti-inflammatory drug",
        side_effects: "diarrhea, nausea, vomiting, dyspepsia, involving upper abdominal\
        pain, bloating, and indigestion, pain in the stomach or intestines",
        donottake: "are sensitive to aspirin or any other NSAID,\
        have, or have had, a peptic ulcer\
        have severe heart failure"
    };
    
    dict["Acetaminophen"] = {
        name:"Acetaminophen",
        alts: "Tylenol, Ofirmev, Mapap",
        uses:"Can treat minor aches and pains, and reduces fever.",
        side_effects: "Side effects are rare but may include cloudy urine",
        donottake: "if you have ever had alcoholic liver disease (cirrhosis)\
        or if you drink more than 3 alcoholic beverages per day.   Your doctor\
        will determine whether acetaminophen is safe for you to use during pregnancy."
    };
    
    dict["Dextromethorphan"] = {
        name:"Dextromethorphan",
        alts: "Robitussin",
        uses:"Cough Suppressant.",
        side_effects: "Blurred vision,confusion, difficulty in urination, drowsiness or dizziness",
        donottake: "have used an MAO inhibitor such as isocarboxazid (Marplan),\
        phenelzine (Nardil), rasagiline (Azilect), selegiline (Eldepryl, Emsam),\
        tranylcypromine (Parnate), or methylene blue injection within the past 14 days."
    };
    
    if(dict[drugs[itemname]] != null){ 
        console.log(dict[drugs[itemname]])
        return (dict[drugs[itemname]]);
    }
    else{
        
        return 0;
    }
}