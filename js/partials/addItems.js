
let createNewItem = `<section id="addNewItems">
           <h3><b>ADD NEW ITEMS</b></h3>
           <div class="form">
               <p>Item name</p> 
               <input type="text" id="newItemName" maxlength="15">
           </div>
          <div class="form">
               <p>Store or Market</p>
               <select id="storeName">
                   <option value="Aldi">Aldi</option>
                   <option value="Coles">Coles</option>
                   <option value="Fruit_Market">Fruit Market</option>
                   <option value="Other">Other</option>
               </select>
           </div>          
           <div class="form">
               <p>Item Category</p>
               <select id="categoryType">
                   <option value="produce">Produce </option>
                   <option value="fresh">Fresh </option>
                   <option value="canned">Canned </option>
                   <option value="cleaning">Cleaning </option>
               </select>
           </div>
           <div class="form">
               <p>Add to choices</p>
               <button onclick="handlers.addNewItem()" class="btn btn-success">Press</button>
           </div>
          <div class="form">
          <button onclick="handlers.removeMakeNewItems()" class="btn btn-success">Hide this section</button>
           </div>
       </section>`;
