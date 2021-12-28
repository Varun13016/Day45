window.addEventListener('DomContentLoaded', (event) => {
    createInnerHtml();
});
// Templete literal feature
const createInnerHtml = () => 
{
    const headerHtml = "<th>Name</th><th>Gender</th><th>Department</th>"+
                     "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
    <tr>
    <td><img class="profile"../Day47/Ellipse-5.png" alt="">Varun13016</td>
    <td>Male</td>
        <td>
            <div class='dept-label'>Production</div>
            <div class='dept-label'>GET</div>
        </td>
        <td>500000</td>
        <td>24 Sept 2021</td>
        <td>
            <img id="1" onclick="remove(this)" src="../Day47/Delete.jpeg" alt="delete">
            <img id="1" onclick="update(this)" src="../Day47/Pencil.jpeg" alt="update">
        </td>
    </tr>
    `;
    document.querySelector("#table-display").innerHTML = innerHtml;
}