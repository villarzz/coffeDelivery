export function ItensToCheckout(){
    return (
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold"></h2>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="input" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" className="input" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="city">City</label>
            <input type="text" id="city" className="input" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="zip">Zip</label>
            <input type="text" id="zip" className="input" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" className="input" />
          </div>
        </div>
    )
}